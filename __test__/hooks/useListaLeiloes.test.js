import { renderHook } from '@testing-library/react-hooks';
import useListaLeiloes from '../../src/hooks/useListaLeiloes';

import { obtemLeiloes } from '../../src/repositorio/leilao';
import { act } from 'react-test-renderer';

jest.mock('../../src/repositorio/leilao'); // mock do repositorio 
const mockLeiloes = [//cria objeto q vai ir dentro do mock 
    {
        id: 1,
        nome: 'Leilao',
        descricao: 'Descricao leilao'
    }
];

const mockLeiloesAtualizado = [//cria objeto q vai ir dentro do mock 
    {
        id: 1,
        nome: 'Leilao',
        descricao: 'Descricao leilao'
    },
    {
        id: 2,
        nome: 'Leilao 2',
        descricao: 'Descricao leilao 2'
    }
];

describe('hooks/useListaLeiloes', () => {
    obtemLeiloes.mockImplementation(() => mockLeiloes);//atribui mock ao teste 

    it('deve retornar uma lista de leiloes e uma funcao para atualizar', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());
        console.log(result.current[0]);
        expect(result.current[0]).toEqual([]); 
        await waitForNextUpdate();
        console.log(result.current[0]);
        expect(result.current[0]).toEqual(mockLeiloes);

        obtemLeiloes.mockImplementation(() => mockLeiloesAtualizado);
        await act(() => result.current[1]());
        expect(result.current[0]).toEqual(mockLeiloesAtualizado);
    });
});