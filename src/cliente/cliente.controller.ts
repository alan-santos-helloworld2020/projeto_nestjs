import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';

const banco = [];

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('list')
  listar(@Res() response) {
    return response.status(200).json(this.clienteService.listar());
  }
  @Get('list/:id')
  pesquisar(@Res() response, @Param('id') id: string) {
    return response.status(200).json(this.clienteService.pesquisar(id));
  }
  @Post('salvar')
  @HttpCode(HttpStatus.CREATED)
  salvar(@Body() body) {
    this.clienteService.salvar(body);
    return body;
  }
  @Put('alterar/:id')
  @HttpCode(HttpStatus.CREATED)
  alterar(@Param('id') id: string, @Body() body) {
    this.clienteService.alterar(id, body);
    return body;
  }
  @Delete('deletar/:id')
  deletar(@Param('id') id: string) {
    this.clienteService.deletar(id);
    return this.clienteService.pesquisar(id);
  }
}
