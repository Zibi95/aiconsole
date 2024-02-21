import { Agent } from '@/types/editables/assetTypes';

export const EXECUTION_MODES = [
  {
    value: 'aiconsole.core.chat.execution_modes.normal:execution_mode',
    label: 'Normal - conversational agent',
  },
  {
    value: 'aiconsole.core.chat.execution_modes.interpreter:execution_mode',
    label: 'Interpreter - code running agent',
  },
  {
    value: 'custom',
    label: 'Custom - (eg. custom.custom:custom_mode)',
  },
] as const;

export const getExecutionMode = (agent: Agent): string => {
  const executionMode = EXECUTION_MODES.find((mode) => mode.value === agent.execution_mode);
  return executionMode?.value ?? 'custom';
};
