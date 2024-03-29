export async function GET() {
    // Simula um atraso de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dados simulados
    const fakeData = { message: "Dados da API simulados" };
  
    // Retorna os dados como uma resposta JSON
    return new Response(JSON.stringify({ data: fakeData }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  