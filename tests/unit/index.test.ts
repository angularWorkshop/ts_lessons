import { filterUsersByStatus, Status, users } from '../../src/index';

describe('status enum exercise', () => {
  it('filters active users', () => {
    expect(filterUsersByStatus(users, Status.Active)).toEqual([{ id: 1, name: 'Max', status: Status.Active }]);
  });

  it('filters pending users', () => {
    expect(filterUsersByStatus(users, Status.Pending)).toEqual([{ id: 3, name: 'Leo', status: Status.Pending }]);
  });
});
