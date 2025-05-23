interface ShortOpenQuestionProps {
  questionText: string;
  answer: string;
  onChange: (value: string) => void;
  inputType: string;
}

export default function ShortOpenQuestion({ questionText, answer, onChange, inputType }: ShortOpenQuestionProps) {
  return (
    <div className="input-container">
      <div className="input-question">
        <h3>{questionText}</h3>
        <div className="form-group">
          <input
            id="open-question"
            type={inputType}
            className="area"
            placeholder="Digite sua resposta"
            value={answer || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}