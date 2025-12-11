# Otimizador de Imagens - Portfolio

## Como usar:

### 1. Instalar Python e a biblioteca Pillow:
```bash
pip install pillow
```

### 2. Renomear suas fotos originais:
- `public/foto-perfil-original.jpg`
- `public/foto-sobre-original.jpg`
- `public/logo-original.png`
- `public/portfolio/foto1-original.jpg` até `foto9-original.jpg`

### 3. Executar o script:
```bash
python otimizar-imagens.py
```

O script vai criar versões otimizadas automaticamente com os nomes corretos!

## Alternativa (sem programação):

Use o site **Squoosh.app**:
1. Acesse https://squoosh.app
2. Arraste cada foto
3. Configure:
   - Resize: 1200px de largura
   - Quality: 85
   - Format: MozJPEG
4. Baixe e substitua em `public/` e `public/portfolio/`
