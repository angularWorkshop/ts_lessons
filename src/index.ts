export type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

export type Identifiable = {
  id: string;
};

export type Auditable = {
  createdBy: string;
  updatedBy: string;
};

export type Entity = Timestamped & Identifiable & Auditable;

export function createEntity(input: {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}): Entity {
  return input;
}
