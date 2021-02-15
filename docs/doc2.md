---
id: doc2
title: Loja Online Comics | Casos de Uso
sidebar_label: Principais Casos de Uso
---


## UC 001 - Gerenciar Cadastro

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que cliente adicione, consulte, remova ou altere seus dados de cadastro para possibilitar fechar pedido.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Cliente</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>Nenhuma</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O sistema apresenta formulário para cliente se cadastrar contendo as informações:
       <br>- Nome
       <br>- CPF
       <br>- Endereço de entrega
       <br>- CEP
       <br>- E-mail
       <br>- Senha para login
       <br>2. Envia para o sistema armazenar os dados.
       </td>
   </tr>
</table>


## UC 002 - Gerenciar quadrinhos

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que administrator adicione, consulte, remova ou altere os quadrinhos que serão exibidos na loja virtual.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Administrator</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>Nenhuma</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O sistema apresenta formulário para administrator cadastrar as informações dos quadrinhos:
       <br>- Nome
       <br>- Código
       <br>- Edição
       <br>- Marca
       <br>- Data de lançamento
       <br>- Número de páginas
       <br>- Classificação
       <br>- Gênero
       <br>- Preço
       <br>- Quantidade em estoque
       <br>- Fotos
       <br>2. Envia para o sistema armazenar os dados.
       </td>
   </tr>
</table>


## UC 003 - Gerenciar formas de pagamento

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que administrator adicione, consulte, remova ou altere as formas de pagamento da loja virtual.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Administrator</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>Nenhuma</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O sistema apresenta formulário para administrator cadastrar as informações dos tipos de pagamentos:
       <br>- Tipo
       <br>- Características
       <br>2. Envia para o sistema armazenar os dados.
       </td>
   </tr>
</table>


## UC 004 - Listar quadrinhos

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que o cliente visualize todas as opções de quadrinhos, permitindo o uso de filtros de pesquisa.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Cliente</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>UC 002</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O sistema lista em tela todas as opções de quadrinhos que foram registradas.
       <br>2. O cliente filtra por nome, categoria e/ou gênero.
       <br>3. O sistema exibe na tela os resultados.
       </td>
   </tr>
</table>


## UC 005 - Detalhar quadrinhos
<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que o cliente visualize o quadrinho em detalhes.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Cliente</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>UC 002 e UC 003</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O cliente escolhe um quadrinho.
       <br>2. O sistema exibe os detalhes do quadrinho. 
       </td>
   </tr>
</table>


## UC 006 - Carrinho de Compras

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que o cliente adicione o quadrinho em carrinho de compras.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Cliente</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>UC 004</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O cliente acessa os detalhes do quadrinho.
       <br>2. O cliente adiciona o quadrinho no carrinho de compras.
       <br>3. O sistema envia para armazenar os dados.
   </tr>
</table>


## UC 007 - Checkout dos Quadrinhos

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que o cliente feche o pedido do quadrinho em carrinho de compras.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Cliente</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>UC 006</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O cliente acessa o carrinho de compras.
       <br>2. O cliente loga com seu usuário.
       <br>3. O cliente adiciona cupom de desconto.
       <br>4. O cliente escolhe forma de pagamento.
       <br>5. O sistema valida forma de pagamento.
       <br>6. O cliente fecha o pedido.
       <br>7. O sistema envia para armazenar os dados.
       </td>
   </tr>
</table>


## UC 008 - Gerenciar pedidos

<table>
   <tr>
       <th>Descrição</th>
       <td>Permitir que o adminstrador mude os status dos pedidos recebidos.</td>
   </tr>
   <tr>
       <th>Ator</th>
       <td>Administrador</td>
   </tr>
   <tr>
       <th>Prioridade</th>
       <td>Alta</td>
   </tr>
   <tr>
       <th>Pré-condição</th>
       <td>UC 007</td>
   </tr>
   <tr>
       <th>Fluxo Principal</th>
       <td>1. O administrador acessa todos os pedidos.
       <br>2. O administrador altera o status dos pedidos.
       <br>3. O sistema envia para armazenar os dados.
       </td>
   </tr>
</table>