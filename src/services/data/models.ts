export interface IButtonProps {
  id?: string | null;
  className?: string;
  text?: string;
  priority?: number;
  innerHtml?: string;
  onClick?: (value: string) => void;
}