import { DataFrame, Field, Vector } from '@grafana/data';

export interface PanelOptions {}

export const defaults: PanelOptions = {};

interface Buffer extends Vector {
  buffer: any;
}

export interface FieldBuffer extends Field<any, Vector> {
  values: Buffer;
}

export interface Frame extends DataFrame {
  fields: FieldBuffer[];
}

export interface DayObj {
  date: string;
  [key: string]: any;
}

export type DayOfWeek = 'Sun' | 'Sat' | 'Fri' | 'Thu' | 'Wed' | 'Tue' | 'Mon';
