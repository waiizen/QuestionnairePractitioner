import {ItemResponse} from "./ItemResponse";
import {Subject} from "./Subject";

export class QuestionnaireResponse{
  id: string;
  status: string;
  authored: string;
  source: Subject;
  subject: Subject;
  item: ItemResponse[];
}
