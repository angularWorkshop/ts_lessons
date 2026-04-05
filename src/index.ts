export type Timestamped = {
  createdAt: Date;
};

export type Identifiable = {
  id: string;
};

export type Auditable = {
  createdBy: string;
};

export type Entity = Timestamped;

export function createEntity(input: {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}): Entity {
  return {
    createdAt: input.createdAt,
  };
}
