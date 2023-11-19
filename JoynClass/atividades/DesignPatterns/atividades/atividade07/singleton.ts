class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = "senhaSuperSecreta123";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta.");
    }
  }
}

// Programa principal
const sistema = SistemaSeguranca.getInstance();

// Tentativa de acesso à Base Secreta
sistema.acessarBaseSecreta("senhaIncorreta"); // Acesso negado. Senha incorreta.
sistema.acessarBaseSecreta("senhaSuperSecreta123"); // Acesso concedido à Base Secreta!
