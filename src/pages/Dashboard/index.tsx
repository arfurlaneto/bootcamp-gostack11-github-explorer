import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Githbub Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/3330854?s=460&u=97f391332cedee83433c96784d16adb923b0f97e&v=4"
            alt="Antonio Furlaneto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Some random description here and there.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/3330854?s=460&u=97f391332cedee83433c96784d16adb923b0f97e&v=4"
            alt="Antonio Furlaneto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Some random description here and there.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/3330854?s=460&u=97f391332cedee83433c96784d16adb923b0f97e&v=4"
            alt="Antonio Furlaneto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Some random description here and there.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
