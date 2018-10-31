import { WorkbenchModule } from './workbench.module';

describe('WorkbenchModule', () => {
  let workbenchModule: WorkbenchModule;

  beforeEach(() => {
    workbenchModule = new WorkbenchModule();
  });

  it('should create an instance', () => {
    expect(workbenchModule).toBeTruthy();
  });
});
