import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  iphone={
    nome: 'Apple iPhone 15 (128 GB) — Preto',
    status: 'Em estoque',
    vendido: 'Apple Store',
    preco: 4848,
    cor: 'Grafite',
    dimensoes: '147.6 x 71.6 x 7.8 cm',

  };


  airpod={
    
   nome: 'AirPods (3.ª geração)',
   status: 'Em estoque',
   vendido: 'Apple Store',
   preco: 1598,
   cor: 'Branco',
   dimensoes: '4.6 x 2.1 x 5.4 cm',

  }

  tv={
    nome: ' Samsung Smart TV 55" UHD 4K',
    status: 'Em Estoque',
    vendido: 'Samsung',
    preco: 2749,
    cor: 'Preto',
    dimensoes: '138.6 x 82.8 x 15.9 cm'
  }

  geladeira={
    nome: 'Geladeira Frost Free Brastemp 375L',
    status: 'Estoque não disponível',
    vendido: 'Brastemp',
    preco: 3199,
    cor: 'Inox',
    dimensoes: '74 x 64 x 180 cm'
  };

  frete ={
    cidade: 'São Paulo',
    cep:'01234-567'
  };

  parcela_a = this.airpod.preco/10;
  parcela_i = this.iphone.preco/10;
  parcela_t = this.tv.preco/10;
  parcela_g = this.geladeira.preco/10;
  

  preco_i = this.iphone.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  parcelado_i =  this.parcela_i.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});

  preco_a = this.airpod.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  parcelado_a =  this.parcela_a.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  
  preco_t = this.tv.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  parcelado_t =  this.parcela_t.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  
  preco_g = this.geladeira.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  parcelado_g =  this.parcela_g.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  
  
  //somando os valores do array loja
  soma =  this.iphone.preco + this.airpod.preco + this.tv.preco + this.geladeira.preco;
  //convertendo as casas decimais para receber ponto e virgula

  frete_su = this.soma + 20;
  frete_ou = this.soma + 30;

  frete_sudeste = this.frete_su.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  frete_outros = this.frete_ou.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,maximumFractionDigits: 2});
  
  total = this.soma.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
 });

}
