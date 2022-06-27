import {
  condition,
  defineQuery,
  defineSignal,
  setHandler
} from '@temporalio/workflow';

export const incrementSignal = defineSignal<[number]>('increment');
export const getValueQuery = defineQuery<number>('getValue');

export async function counterWorkflow(initial: number): Promise<void> {
  let value = initial;

  setHandler(incrementSignal, (val: number) => { value += val; });
  setHandler(getValueQuery, () => value);

  await condition(() => false);
};