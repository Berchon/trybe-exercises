<div><h2 class="text-center challenge-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux: Remover um item de uma matriz</font></font></h2><div class="challenge-instructions redux"><div><section id="description">
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">É hora de praticar a remoção de itens de uma matriz. </font><font style="vertical-align: inherit;">O operador de propagação também pode ser usado aqui. </font><font style="vertical-align: inherit;">Outros métodos úteis de JavaScript incluem </font></font><code>slice()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e </font></font><code>concat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></p></section></div><hr><div><section id="instructions">
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O redutor e o criador da ação foram modificados para remover um item de uma matriz com base no índice do item. </font><font style="vertical-align: inherit;">Termine de escrever o redutor para que uma nova matriz de estado seja retornada com o item no índice específico removido.</font></font></p></section></div><hr></div></div>


<div class="challenge-test-suite"><div aria-label="Pass - <p>The Redux store should exist and initialize with a state equal to [0,1,2,3,4,5]</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O armazenamento Redux deve existir e inicializar com um estado igual a </font></font><code>[0,1,2,3,4,5]</code></p></div></div><div aria-label="Pass - <p>removeItem and immutableReducer both should be functions.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p><code>removeItem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e </font></font><code>immutableReducer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ambos devem ser funções.</font></font></p></div></div><div aria-label="Pass - <p>Dispatching the removeItem action creator should remove items from the state and should NOT mutate state.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Despachar o </font></font><code>removeItem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">criador </font><font style="vertical-align: inherit;">da </font><font style="vertical-align: inherit;">ação deve remover os itens do estado e NÃO deve mudar o estado.</font></font></p></div></div></div>




const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
