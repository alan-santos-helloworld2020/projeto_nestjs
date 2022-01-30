import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Cliente } from './entities/Cliente.entity';

@Injectable()
export class ClienteService {
  private cliente: Cliente[] = [];

  listar() {
    return this.cliente;
  }

  pesquisar(id: string) {
    const cl = this.cliente.find((c) => c.id === Number(id));
    if (!cl) {
      throw new HttpException('não encontrado', HttpStatus.NOT_FOUND);
    } else {
      return cl;
    }
  }

  salvar(ClienteDto: any) {
    ClienteDto.id = this.cliente.length + 1;
    ClienteDto.data = '22/01/2022';
    this.cliente.push(ClienteDto);
    return ClienteDto;
  }
  alterar(id: string, ClienteDto: any) {
    const index = this.cliente.findIndex((c) => c.id === Number(id));
    this.cliente[index] = ClienteDto;
  }
  deletar(id: string) {
    const index = this.cliente.findIndex((c) => c.id === Number(id));
    if (index > 0) {
      this.cliente.splice(index, 1);
    }
  }
}
