import { dtoBase } from "./dtoBase";

export class UserDto extends dtoBase {
  firstname?: string;

  lastname?: string;

  email?: string;

  phoneNumber?: string;

  password?: string;
}