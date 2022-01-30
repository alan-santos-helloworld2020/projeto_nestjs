import { IsString } from 'class-validator';

export class ClienteDto {
  @IsString()
  readonly nome: string;
  @IsString()
  readonly telefone: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly cep: string;
}
