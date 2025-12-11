# 📸 Como Substituir as Fotos do Portfólio

## Passo a Passo Simples:

### 1️⃣ Depois de baixar o projeto

Quando você baixar o projeto do Figma Make, você vai ter uma estrutura de pastas assim:

```
meu-site-odontologia/
├── src/
├── public/          ← Aqui você vai colocar as fotos
├── package.json
└── ...
```

### 2️⃣ Organize suas fotos

1. Crie uma pasta chamada **portfolio** dentro de **public**:

```
public/
└── portfolio/
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── foto4.jpg
    ├── foto5.jpg
    └── foto6.jpg
```

2. **Renomeie** suas fotos para: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
   - Pode ser .jpg, .jpeg ou .png
   - Se usar outro nome, edite o arquivo `/src/components/Portfolio.tsx`

### 3️⃣ Personalize os títulos (opcional)

Abra o arquivo `/src/components/Portfolio.tsx` e edite:

```tsx
const portfolioImages = [
  {
    id: 1,
    url: '/portfolio/foto1.jpg',
    title: 'Seu Título Aqui',        // ← Mude aqui
    category: 'Artística'              // ← Escolha a categoria
  },
  // ... repita para cada foto
];
```

**Categorias disponíveis:**
- `'Artística'`
- `'Clínica'`
- `'Equipamentos'`
- `'Procedimentos'`

### 4️⃣ Deploy na Vercel

Quando fizer o deploy na Vercel:
- As fotos na pasta `public/` vão junto automaticamente
- Tudo vai funcionar perfeitamente!

---

## 🖼️ Adicionar mais fotos?

Basta adicionar mais objetos no array:

```tsx
const portfolioImages = [
  // ... fotos existentes ...
  {
    id: 7,
    url: '/portfolio/foto7.jpg',
    title: 'Nova Foto',
    category: 'Artística'
  }
];
```

---

## ✨ Suas Informações no Site

Todas as suas informações já estão no site:

- ✅ Dr. David Breno Santos
- ✅ CRO MG 71-476
- ✅ Curvelo - MG
- ✅ WhatsApp: (38) 99979-0464
- ✅ CNPJ: 63.845.827/0001-16

---

## 📝 Precisa de Ajuda?

Se tiver dúvidas, procure nos arquivos:
- `/src/components/Portfolio.tsx` - Fotos do portfólio
- `/src/components/About.tsx` - Seção sobre você
- `/src/components/Contact.tsx` - Informações de contato
