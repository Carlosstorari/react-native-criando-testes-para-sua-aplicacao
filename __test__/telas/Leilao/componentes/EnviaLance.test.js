import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';
import { ENVIADO, NAO_ENVIADO } from '../../../../src/negocio/constantes/estadosLance';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
describe('tela/Leilao/components/EnviaLance', () => {

    it('deve enviar o lance quando o botão for pressionado', async () => {

        const enviaLance = jest.fn(
            () => new Promise(resolve => resolve(ENVIADO))
        )

        const { 
            getByPlaceholderText, 
            getByA11yHint,
            getByText 
        } = render(
            <EnviaLance // renderiza componente pra teste 
                enviaLance={enviaLance}
                cor="blue"
            />
        );
        const input = getByPlaceholderText("R$");//pega referencia do campo de testo pelo hint
        const botao = getByA11yHint("Enviar lance");// pega referencia do botao pelo campo de acessibilidade 
        
        fireEvent.changeText(input, "10");//simula a entrada de valor no input
        fireEvent.press(botao);//simula botao presionado

        expect(enviaLance).toHaveBeenCalledWith("10");//testa se a funcao foi chamada com o valor passado  
        await waitFor(() => {// espera a funcao assincrona ser executada 
            expect(getByText(ENVIADO)).toBeTruthy();
        });

        expect(() => getByText(NAO_ENVIADO)).toThrow();
    });

});