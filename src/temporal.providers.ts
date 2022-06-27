import { WorkflowClient } from '@temporalio/client';
import { counterWorkflow } from './workflows';

export const temporalProviders = [
  {
    provide: 'COUNTER_WORKFLOW',
    useFactory: async () => {
      const client = new WorkflowClient();

      console.log('Start counter workflow');

      const handle = await client.start(counterWorkflow, {
        args: [0],
        taskQueue: 'nest-test',
        workflowId: 'counter'
      });

      console.log('Started counter ', handle);
      return handle;
    }
  }
]