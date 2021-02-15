/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.users.map((user) => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Documento de Regras e Requisitos</h1>
              <p>O propósito deste documento é apresentar a descrição dos serviços, funções e propriedades 
                gerais que a loja online de revistas em quadrinhos deve prover, a fim de ilustrar uma descrição 
                detalhada do sistema para um auxílio durante o desenvolvimento (analistas de sistemas e programadores), 
                testes do sistema e avaliadores do projeto.</p>
            </div>
            <div className="logos">{showcase}</div>
            {siteConfig.repoUrl && (
              <React.Fragment>
                <p>Are you using this project?</p>
                <a
                  href={`${siteConfig.repoUrl}/edit/master/website/siteConfig.js`}
                  className="button">
                  Add your company
                </a>
              </React.Fragment>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
