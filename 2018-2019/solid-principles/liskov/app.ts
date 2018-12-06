export class QuizQuestion {
    private _question: string;
    private _answer1: string;
    private _answer2: string;
    private _answer3: string;
    private _answer4: string;
    private _correctAnswer: number;

    constructor(question: string, ans1: string, ans2: string, ans3: string, ans4: string, correctAns: number) {
        this._question = question;
        this._answer1 = ans1;
        this._answer2 = ans2;
        this._answer3 = ans3;
        this._answer4 = ans4;
        this._correctAnswer = correctAns;
    }

    public get question(): string {
        return this._question;
    }
 
    public get answer1(): string {
        return this._answer1;
    }

    public get answer2(): string {
        return this._answer2;
    }

    public get answer3(): string {
        return this._answer3;
    }

    public get answer4(): string {
        return this._answer4;
    }

    public get correctAnswer(): number {
        return this._correctAnswer;
    }

}

