export type WizardStep = 'email' | 'confirm' | 'success';

export interface WizardState {
  step: WizardStep;
  email: string;
  error: string | null;
  success: boolean;
}