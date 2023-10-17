interface Editor {
  save(data: any): void;
}

interface Subject {
  insertLine(lineNumber: number, text: string): void;
  removeLine(lineNumber: number): void;
  notifyObservers(): void;
}

class TextEditor implements Subject {
  private editor: string[] = [];
  private observers: Editor[] = [];

  public insertLine(lineNumber: number, text: string): void {
    this.editor.splice(lineNumber, 0, text);
    this.notifyObservers();
  }

  public removeLine(lineNumber: number): void {
    this.editor.splice(lineNumber, 1);
    this.notifyObservers();
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.save(this.editor);
    }
  }

  public addObserver(observer: Editor): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Editor): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
}

class Observer implements Editor {
  public save(data: any): void {
    console.log(data);
  }
}

const textEditor = new TextEditor();


const observer = new Observer();
textEditor.addObserver(observer);

textEditor.insertLine(1, 'Conteudo do texto');