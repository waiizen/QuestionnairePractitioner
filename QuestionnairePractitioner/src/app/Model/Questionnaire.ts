export class Questionnaire{
  url: string;
  identifier: number;
  name: string;
  title: string;
  status: number; // 0 = draft | 1 = active | 2 = retired | 3 = unknown
  date: Date;
  description: string;
  purpose: string;
  // TO DO
}
