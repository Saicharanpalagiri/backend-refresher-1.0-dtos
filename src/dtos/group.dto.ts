import { ContentDto } from './content.dto';
import { dtoBase } from './dtoBase';

export class GroupDto extends dtoBase {
  title: string;
  type: string;
}