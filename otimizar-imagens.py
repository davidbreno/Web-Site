"""
Script para otimizar imagens do portfolio
Redimensiona e comprime JPG/PNG para WebP otimizado
"""

from PIL import Image
import os

def otimizar_imagem(caminho_entrada, caminho_saida, max_largura=1200, qualidade=85):
    """Otimiza uma imagem redimensionando e convertendo para WebP"""
    try:
        # Abrir imagem
        img = Image.open(caminho_entrada)
        
        # Converter RGBA para RGB se necessário
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Redimensionar mantendo proporção
        if img.width > max_largura:
            proporcao = max_largura / img.width
            nova_altura = int(img.height * proporcao)
            img = img.resize((max_largura, nova_altura), Image.Resampling.LANCZOS)
        
        # Salvar como WebP ou JPG otimizado
        if caminho_saida.endswith('.webp'):
            img.save(caminho_saida, 'WebP', quality=qualidade, method=6)
        else:
            img.save(caminho_saida, 'JPEG', quality=qualidade, optimize=True)
        
        # Tamanhos antes e depois
        tamanho_antes = os.path.getsize(caminho_entrada) / 1024
        tamanho_depois = os.path.getsize(caminho_saida) / 1024
        economia = ((tamanho_antes - tamanho_depois) / tamanho_antes) * 100
        
        print(f"✓ {os.path.basename(caminho_saida)}: {tamanho_antes:.1f}KB → {tamanho_depois:.1f}KB ({economia:.1f}% menor)")
        
    except Exception as e:
        print(f"✗ Erro em {caminho_entrada}: {e}")

def main():
    print("=== OTIMIZADOR DE IMAGENS ===\n")
    
    # Diretórios
    pasta_public = "public"
    pasta_portfolio = os.path.join(pasta_public, "portfolio")
    
    # Criar pastas se não existirem
    os.makedirs(pasta_public, exist_ok=True)
    os.makedirs(pasta_portfolio, exist_ok=True)
    
    print("Coloque suas imagens originais aqui antes de rodar o script:")
    print(f"  - Foto de perfil: {pasta_public}/foto-perfil-original.jpg")
    print(f"  - Foto sobre: {pasta_public}/foto-sobre-original.jpg")
    print(f"  - Logo: {pasta_public}/logo-original.png")
    print(f"  - Portfolio: {pasta_portfolio}/foto1-original.jpg até foto9-original.jpg\n")
    
    arquivos_para_otimizar = [
        # (arquivo_entrada, arquivo_saida, largura_max)
        (f"{pasta_public}/foto-perfil-original.jpg", f"{pasta_public}/foto-perfil.jpg", 800),
        (f"{pasta_public}/foto-sobre-original.jpg", f"{pasta_public}/foto-sobre.jpg", 1200),
        (f"{pasta_public}/logo-original.png", f"{pasta_public}/logo.png", 600),
    ]
    
    # Adicionar fotos do portfolio
    for i in range(1, 10):
        arquivos_para_otimizar.append(
            (f"{pasta_portfolio}/foto{i}-original.jpg", f"{pasta_portfolio}/foto{i}.jpg", 1200)
        )
    
    print("Otimizando imagens...\n")
    
    otimizadas = 0
    for entrada, saida, largura in arquivos_para_otimizar:
        if os.path.exists(entrada):
            otimizar_imagem(entrada, saida, max_largura=largura, qualidade=85)
            otimizadas += 1
    
    if otimizadas == 0:
        print("⚠ Nenhuma imagem encontrada! Adicione arquivos com '-original' no nome.")
    else:
        print(f"\n✓ {otimizadas} imagem(ns) otimizada(s) com sucesso!")
        print("\nVocê pode deletar os arquivos '-original' agora se quiser.")

if __name__ == "__main__":
    main()
