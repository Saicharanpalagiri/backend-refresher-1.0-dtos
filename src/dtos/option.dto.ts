import { ContentDto } from './content.dto';
import { dtoBase } from './dtoBase';

export class OptionDto extends dtoBase {
  title: string;
  body: string;
  content?: ContentDto;
}