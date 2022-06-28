export interface IButtonProps {
  id?: string | null;
  className?: string;
  text?: string;
  priority?: number;
  onClick?: (value: string) => void;
}