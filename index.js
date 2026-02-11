body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f2f5;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: 300px;
}

h2 { font-size: 1.2rem; color: #333; margin-bottom: 20px; }

label { display: block; margin-top: 10px; font-size: 14px; color: #666; }

input, select {
    width: 100%;
    padding: 10px;
    margin: 5px 0 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #6200ee;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

.msg {
    margin-top: 20px;
    padding: 10px;
    border-radius: 6px;
    font-weight: bold;
    display: none; /* Escondido até clicar */
}

.sucesso { display: block; background-color: #d4edda; color: #155724; }
.erro { display: block; background-color: #f8d7da; color: #721c24; }
