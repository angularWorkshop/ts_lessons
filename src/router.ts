import { z } from 'zod';

import {
  createNavigationId,
  createRouteName,
  createRoutePath,
  type RouteName,
  type RoutePath,
} from './brands';
import { cached, logged, type LogSink } from './decorators';
import { err, isErr, type Result } from './result';

const emptyObjectSchema = z.object({});

type EmptyObjectSchema = typeof emptyObjectSchema;
type AnySchema = z.ZodTypeAny;

export type FrameworkErrorCode =
  | 'UNKNOWN_ROUTE'
  | 'VALIDATION_ERROR'
  | 'MISSING_PARAM'
  | 'ROUTE_BUILD_FAILED';

export interface FrameworkError {
  readonly code: FrameworkErrorCode;
  readonly message: string;
  readonly issues: readonly string[];
}

export interface RouteDefinition<
  Path extends string,
  ParamsSchema extends AnySchema = EmptyObjectSchema,
  SearchSchema extends AnySchema = EmptyObjectSchema,
> {
  readonly path: Path;
  readonly params: ParamsSchema;
  readonly search: SearchSchema;
}

export type RouteMap = Record<string, RouteDefinition<string, AnySchema, AnySchema>>;

export type RouteParams<Route extends RouteDefinition<string, AnySchema, AnySchema>> = z.output<
  Route['params']
>;

export type RouteSearch<Route extends RouteDefinition<string, AnySchema, AnySchema>> = z.output<
  Route['search']
>;

export interface NavigationInput<Route extends RouteDefinition<string, AnySchema, AnySchema>> {
  readonly params: z.input<Route['params']>;
  readonly search?: z.input<Route['search']>;
}

export interface NavigationSuccess<
  Name extends string,
  Route extends RouteDefinition<string, AnySchema, AnySchema>,
> {
  readonly id: ReturnType<typeof createNavigationId>;
  readonly name: RouteName<Name>;
  readonly path: RoutePath;
  readonly params: RouteParams<Route>;
  readonly search: RouteSearch<Route>;
}

export interface RouterStats {
  readonly pathBuilds: number;
}

interface ValidatedRouteInput<Route extends RouteDefinition<string, AnySchema, AnySchema>> {
  readonly route: Route;
  readonly params: RouteParams<Route>;
  readonly search: RouteSearch<Route>;
}

export function createFrameworkError(
  code: FrameworkErrorCode,
  message: string,
  issues: readonly string[] = [],
): FrameworkError {
  return { code, message, issues };
}

export function defineRoute<
  Path extends string,
  ParamsSchema extends AnySchema = EmptyObjectSchema,
  SearchSchema extends AnySchema = EmptyObjectSchema,
>(config: {
  readonly path: Path;
  readonly params?: ParamsSchema;
  readonly search?: SearchSchema;
}): RouteDefinition<Path, ParamsSchema, SearchSchema> {
  return {
    path: config.path,
    params: (config.params ?? emptyObjectSchema) as ParamsSchema,
    search: (config.search ?? emptyObjectSchema) as SearchSchema,
  };
}

function formatZodIssues(error: z.ZodError): readonly string[] {
  return error.issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join('.') : 'root';
    return `${path}: ${issue.message}`;
  });
}

export class Router<Routes extends RouteMap> implements LogSink {
  private readonly logs: string[] = [];
  private readonly stats = {
    pathBuilds: 0,
  };

  public constructor(private readonly routes: Routes) {}

  public appendLog(message: string): void {
    this.logs.push(message);
  }

  public getLogs(): readonly string[] {
    return this.logs;
  }

  public getStats(): RouterStats {
    return { ...this.stats };
  }

  @logged('buildPath')
  @cached()
  public buildPath<Name extends keyof Routes & string>(
    name: Name,
    input: NavigationInput<Routes[Name]>,
  ): Result<RoutePath, FrameworkError> {
    const validated = this.validateInput(name, input);

    if (isErr(validated)) {
      return validated;
    }

    this.stats.pathBuilds += 1;

    return err(
      createFrameworkError(
        'ROUTE_BUILD_FAILED',
        'TODO: implement path resolution for the capstone router',
      ),
    );
  }

  @logged('navigate')
  public navigate<Name extends keyof Routes & string>(
    name: Name,
    input: NavigationInput<Routes[Name]>,
  ): Result<NavigationSuccess<Name, Routes[Name]>, FrameworkError> {
    const validated = this.validateInput(name, input);

    if (isErr(validated)) {
      return validated;
    }

    return err(
      createFrameworkError(
        'ROUTE_BUILD_FAILED',
        'TODO: implement navigation records for the capstone router',
      ),
    );
  }

  private validateInput<Name extends keyof Routes & string>(
    name: Name,
    input: NavigationInput<Routes[Name]>,
  ): Result<ValidatedRouteInput<Routes[Name]>, FrameworkError> {
    const route = this.routes[name];

    if (!route) {
      return err(createFrameworkError('UNKNOWN_ROUTE', `Unknown route: ${name}`));
    }

    const parsedParams = route.params.safeParse(input.params);

    if (!parsedParams.success) {
      return err(
        createFrameworkError(
          'VALIDATION_ERROR',
          `Invalid params for route "${name}"`,
          formatZodIssues(parsedParams.error),
        ),
      );
    }

    const parsedSearch = route.search.safeParse(input.search ?? {});

    if (!parsedSearch.success) {
      return err(
        createFrameworkError(
          'VALIDATION_ERROR',
          `Invalid search for route "${name}"`,
          formatZodIssues(parsedSearch.error),
        ),
      );
    }

    return {
      ok: true,
      value: {
        route,
        params: parsedParams.data as RouteParams<Routes[Name]>,
        search: parsedSearch.data as RouteSearch<Routes[Name]>,
      },
    };
  }
}

export function createRouter<Routes extends RouteMap>(routes: Routes): Router<Routes> {
  return new Router(routes);
}

export function createRouteRecord<Name extends string, Route extends RouteDefinition<string, AnySchema, AnySchema>>(
  name: Name,
  path: RoutePath,
  validated: ValidatedRouteInput<Route>,
): NavigationSuccess<Name, Route> {
  return {
    id: createNavigationId(`${name}:${path}`),
    name: createRouteName(name),
    path,
    params: validated.params,
    search: validated.search,
  };
}
