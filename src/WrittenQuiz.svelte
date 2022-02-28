<script lang="ts">
  import { STATES_CAPITALS, CollectionUtil } from "./data";

  const QUESTION_STATE = "question_state";
  const ANSWER_STATE = "answer_state";
  const COMPLETE_STATE = "complete_state";
  type State =
    | typeof QUESTION_STATE
    | typeof ANSWER_STATE
    | typeof COMPLETE_STATE;

  const NIL = 0;
  const CORRECT = 1;
  const INCORRECT = 2;
  type Result = typeof NIL | typeof CORRECT | typeof INCORRECT;

  const question_answer = CollectionUtil.randomized(STATES_CAPITALS);
  const results: Result[] = question_answer.map(() => NIL);

  let state: State = QUESTION_STATE;

  let index: number = 0;
  let question: string = "";
  let answer: string = "";

  let response: string = "";
  let result: Result = NIL;

  function handleAnswer() {
    result =
      answer.toLowerCase() === response.toLowerCase() ? CORRECT : INCORRECT;
    results[index] = result;
    state = ANSWER_STATE;
  }

  function handleNextQuestion() {
    response = "";
    result = NIL;
    index += 1;
    state = index < question_answer.length ? QUESTION_STATE : COMPLETE_STATE;
  }
  $: [question, answer] = question_answer[index];
</script>

<div id="written-quizz">
  {#if state === ANSWER_STATE}
    <section id="answer" class="valign">
      <section class="modal valign margin-bottom">
        <p>
          {results[index] === CORRECT
            ? "That is correct!"
            : "That is incorrect"}
        </p>
        <p>The answer is {answer}</p>
        <button on:click={handleNextQuestion}>Next</button>
      </section>
    </section>
  {/if}
  <section id="question" class="valign margin-bottom">
    <section id="question-header" class="border-bottom">
      <p>{index + 1} of {question_answer.length}</p>
    </section>
    <section id="question-body" class="border-bottom">
      <p>{question}</p>
    </section>
    <section id="question-input">
      <form class="halign" on:submit={(e) => e.preventDefault()}>
        <span>
          <label for="response">Response:</label>
          <input
            type="text"
            name="response"
            id="response"
            autocomplete="off"
            bind:value={response}
          />
        </span>
        <input type="submit" value="Submit" on:click={handleAnswer} />
      </form>
    </section>
  </section>
</div>

<style>
  .valign {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .halign {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .margin-bottom {
    margin-bottom: 1em;
  }

  #written-quizz input {
    margin: 0;
  }

  #answer {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0;
    margin: 0;
  }

  #answer .modal {
    width: 400px;
    border: 1px solid black;
    background-color: white;
  }

  #question {
    width: 450px;
    border: 1px solid black;
    background-color: white;
  }
  #question section {
    width: 100%;
    text-align: center;
  }

  #question-body p {
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  #question-input {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  #question-input label {
    display: inline-block;
  }

  .border-bottom {
    border-bottom: 1px solid black;
  }
</style>
