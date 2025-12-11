# 📸 GUIA RÁPIDO: Como Adicionar SUAS Fotos Odontológicas

## ✅ AGORA O SITE ESTÁ FUNCIONANDO COM FOTOS TEMPORÁRIAS!

As fotos que você está vendo agora são **imagens temporárias do Unsplash** (banco de imagens gratuito).

---

## 📍 ONDE ESTÃO AS FOTOS NO SITE:

### 1️⃣ **FOTO DE PERFIL (Hero - Página Inicial)**
- **Arquivo:** `/components/Hero.tsx`
- **Linha:** 81
- **Como trocar:**
```tsx
// ENCONTRE esta linha:
<img 
  src="https://images.unsplash.com/photo-1631596577204..." 
  alt="Dr. David Breno Santos"
/>

// TROQUE por SUA FOTO:
<img 
  src="/foto-perfil.jpg"  // ← Coloque sua foto na pasta public/
  alt="Dr. David Breno Santos"
/>
```

### 2️⃣ **FOTO "SOBRE MIM" (Seção About)**
- **Arquivo:** `/components/About.tsx`
- **Linha:** 10
- **Como trocar:**
```tsx
// ENCONTRE esta linha:
<img 
  src="https://images.unsplash.com/photo-1764004450351..." 
  alt="Dr. David Breno Santos"
/>

// TROQUE por SUA FOTO:
<img 
  src="/foto-sobre.jpg"  // ← Coloque sua foto na pasta public/
  alt="Dr. David Breno Santos"
/>
```

### 3️⃣ **FOTOS DO PORTFÓLIO (6 fotos)**
- **Arquivo:** `/components/Portfolio.tsx`
- **Linhas:** 19-56
- **Como trocar:** (já explicado abaixo)

---

## 🔄 Para substituir pelas SUAS fotos reais:

### **OPÇÃO 1: Método Simples (Recomendado)**

1️⃣ **Baixe o projeto** do Figma Make

2️⃣ **Coloque suas fotos na pasta `public/`:**
```
projeto/
└── public/
    ├── foto-perfil.jpg       ← SUA FOTO (Hero/Home)
    ├── foto-sobre.jpg        ← SUA FOTO (About)
    └── portfolio/
        ├── foto1.jpg         ← PORTFÓLIO
        ├── foto2.jpg         ← PORTFÓLIO
        ├── foto3.jpg         ← PORTFÓLIO
        ├── foto4.jpg         ← PORTFÓLIO
        ├── foto5.jpg         ← PORTFÓLIO
        └── foto6.jpg         ← PORTFÓLIO
```

3️⃣ **Edite os arquivos:**

**A) Foto de Perfil (Home) → `/components/Hero.tsx`**
```tsx
<img 
  src="/foto-perfil.jpg"
  alt="Dr. David Breno Santos"
  className="rounded-lg w-full max-w-md mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30"
/>
```

**B) Foto Sobre Mim → `/components/About.tsx`**
```tsx
<img 
  src="/foto-sobre.jpg"
  alt="Dr. David Breno Santos"
  className="rounded-lg w-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30"
/>
```

**C) Fotos do Portfólio → `/components/Portfolio.tsx`**
```tsx
const portfolioImages = [
  {
    id: 1,
    url: '/portfolio/foto1.jpg',  // ← SUA FOTO LOCAL
    title: 'Implante - Caso 1',
    category: 'Artística'
  },
  {
    id: 2,
    url: '/portfolio/foto2.jpg',
    title: 'Prótese - Caso 2',
    category: 'Procedimentos'
  },
  // ... continue com suas 6 fotos
];
```

---

## 🎯 RESUMO RÁPIDO:

| **Foto** | **Arquivo para Editar** | **Nome Sugerido** | **Onde colocar** |
|----------|------------------------|-------------------|------------------|
| Foto de Perfil (Home) | `/components/Hero.tsx` linha 81 | `foto-perfil.jpg` | `public/` |
| Foto Sobre Mim | `/components/About.tsx` linha 10 | `foto-sobre.jpg` | `public/` |
| Portfólio (6 fotos) | `/components/Portfolio.tsx` linha 19-56 | `foto1.jpg` até `foto6.jpg` | `public/portfolio/` |

---

### **OPÇÃO 2: Adicionar Mais Fotos**

Você pode adicionar quantas fotos quiser! Basta:

1. Adicionar mais fotos na pasta `public/portfolio/`
2. Adicionar mais objetos no array:

```tsx
const portfolioImages = [
  // ... fotos existentes ...
  {
    id: 7,
    url: '/portfolio/foto7.jpg',
    title: 'Cirurgia Avançada',
    category: 'Procedimentos'
  },
  {
    id: 8,
    url: '/portfolio/foto8.jpg',
    title: 'Fotografia Artística - Sorriso',
    category: 'Artística'
  },
  // Adicione quantas quiser!
];
```

---

### **OPÇÃO 3: Usar URLs de Fotos Online**

Se suas fotos já estão hospedadas online (Google Drive, Dropbox, servidor próprio), você pode usar URLs diretas:

```tsx
const portfolioImages = [
  {
    id: 1,
    url: 'https://meusite.com/fotos/foto1.jpg',
    title: 'Minha Foto',
    category: 'Artística'
  },
];
```

⚠️ **IMPORTANTE:** As URLs precisam ser públicas e acessíveis!

---

## 🎨 Categorias Disponíveis:

- `'Artística'` → Fotografias artísticas odontológicas
- `'Procedimentos'` → Casos clínicos e procedimentos

Você pode criar novas categorias editando o array `categories` em `Portfolio.tsx`:

```tsx
const categories = ['Todos', 'Artística', 'Procedimentos', 'Cirurgias', 'Implantes'];
```

---

## 📐 Dicas para Suas Fotos:

✅ **Formato:** JPG ou PNG  
✅ **Tamanho recomendado:** 1920x1080px (Full HD) ou maior  
✅ **Peso máximo:** 2MB por imagem (otimize se necessário)  
✅ **Qualidade:** Alta resolução para portfólio profissional  
✅ **Aspecto:** Fotos quadradas (1:1) ficam melhores na galeria  

---

## 🚀 Depois de Adicionar Suas Fotos:

1. Salve os arquivos
2. Rode o projeto: `npm run dev`
3. Veja suas fotos no navegador!
4. Faça deploy na Vercel

---

## ❓ Dúvidas?

- As fotos não aparecem? Verifique se os nomes dos arquivos estão corretos
- Certifique-se que as fotos estão em `public/portfolio/`
- Cuidado com maiúsculas/minúsculas: `Foto.jpg` ≠ `foto.jpg`

**Agora é só substituir as fotos e seu portfólio estará completo! 🦷���**