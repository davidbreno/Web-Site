# Site Odontológico - Dr. David Breno

Site profissional moderno com design dark para portfólio odontológico.

## 📸 Como Substituir a Foto do Hero

### Passo 1: Preparar a Nova Foto
1. Escolha uma foto em alta resolução (recomendado: PNG com fundo transparente ou JPG)
2. Renomeie o arquivo para algo simples, exemplo: `doctor-photo.png`

### Passo 2: Substituir no Código
Abra o arquivo `/components/Hero.tsx` e localize a linha 2:

```tsx
import doctorPhoto from 'figma:asset/1754a662d237c6e125380466d1d78ffb89959d84.png';
```

**Substitua por:**
```tsx
import doctorPhoto from './imports/doctor-photo.png';
```

### Passo 3: Adicionar a Foto ao Projeto
1. Crie uma pasta `/imports` na raiz do projeto (se não existir)
2. Coloque sua nova foto dentro dessa pasta
3. Certifique-se que o nome do arquivo corresponde ao nome usado no import

---

## 🎯 Como Mover/Posicionar a Foto

### Opções de Posicionamento Vertical

Abra `/components/Hero.tsx` e localize a linha 90:

```tsx
<div className="relative flex items-start justify-center md:items-end">
```

**Altere o posicionamento vertical modificando essas classes:**

| Posição Desejada | Classes a Usar |
|------------------|----------------|
| **Topo da seção** | `items-start` |
| **Centro da seção** | `items-center` |
| **Base da seção (atual)** | `items-start md:items-end` |
| **Sempre no topo** | `items-start md:items-start` |
| **Sempre centralizada** | `items-center md:items-center` |
| **Sempre na base** | `items-end md:items-end` |

### Exemplos Práticos

**Para deixar a foto sempre centralizada verticalmente:**
```tsx
<div className="relative flex items-center justify-center">
```

**Para deixar a foto no topo em mobile e centro em desktop:**
```tsx
<div className="relative flex items-start justify-center md:items-center">
```

**Para deixar a foto sempre na base (como está atualmente):**
```tsx
<div className="relative flex items-start justify-center md:items-end">
```

### Posicionamento Horizontal

A foto já está centralizada horizontalmente. Para alterar:

| Posição Desejada | Altere `justify-center` para: |
|------------------|-------------------------------|
| **Esquerda** | `justify-start` |
| **Centro (atual)** | `justify-center` |
| **Direita** | `justify-end` |

### Ajustar Tamanho da Foto

Localize a linha 95 em `/components/Hero.tsx`:

```tsx
className="w-full max-w-md mx-auto object-contain opacity-40"
```

**Opções de tamanho (altere `max-w-md`):**
- `max-w-xs` - Extra pequeno
- `max-w-sm` - Pequeno
- `max-w-md` - Médio (atual)
- `max-w-lg` - Grande
- `max-w-xl` - Extra grande
- `max-w-2xl` - Muito grande

**Ajustar opacidade (altere `opacity-40`):**
- `opacity-20` - Muito transparente
- `opacity-40` - Transparente (atual)
- `opacity-60` - Semi-transparente
- `opacity-80` - Pouca transparência
- `opacity-100` - Opaco (sem transparência)

---

## 🎨 Efeitos Visuais da Foto

Os efeitos aplicados estão nas linhas 97-99 em `/components/Hero.tsx`:

```tsx
style={{ 
  mixBlendMode: 'screen',
  filter: 'grayscale(100%) brightness(1.3) contrast(1.2)'
}}
```

### Personalizar Efeitos:

**Remover o efeito de mesclagem (blend):**
```tsx
style={{ 
  filter: 'grayscale(100%) brightness(1.3) contrast(1.2)'
}}
```

**Foto colorida (sem grayscale):**
```tsx
style={{ 
  mixBlendMode: 'screen',
  filter: 'brightness(1.3) contrast(1.2)'
}}
```

**Foto totalmente normal (sem efeitos):**
```tsx
className="w-full max-w-md mx-auto object-contain"
```
(remova a propriedade `style` completamente)

**Ajustar brilho:**
- `brightness(0.8)` - Mais escuro
- `brightness(1.3)` - Atual
- `brightness(1.5)` - Mais claro

**Ajustar contraste:**
- `contrast(1.0)` - Normal
- `contrast(1.2)` - Atual
- `contrast(1.5)` - Mais contraste

---

## 📱 Dados de Contato

Para atualizar seus dados de contato, edite o arquivo `/components/Footer.tsx`:

- **CRO:** Linha com "CRO MG 71-476"
- **CNPJ:** Linha com "63.845.827/0001-16"
- **WhatsApp:** Links com `wa.me/5538999790464`
- **Instagram:** Links com `@dr.davidbreno`
- **Endereço:** "Curvelo, MG"

---

## 🚀 Deploy na Vercel

1. Faça commit das alterações no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Deploy automático!

---

## 💡 Suporte

Para dúvidas ou ajustes adicionais, consulte a documentação do Tailwind CSS ou entre em contato.
