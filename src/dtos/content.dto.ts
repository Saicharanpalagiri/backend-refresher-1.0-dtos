import { ContentType } from '../enums/ContentType.enum';
import { dtoBase } from './dtoBase';
import { OptionDto } from './option.dto';
import { UserDto } from './user.dto';

export class ContentDto extends dtoBase {
  title?: string;
  type?: ContentType; /// post and poll only
  body?: string;
  imageUrls?: string;
  videoUrl?: string;
  users?: UserDto[];
  options?: OptionDto[]
}