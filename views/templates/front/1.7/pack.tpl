{extends file='catalog/product.tpl'}

{* Temas con layout "full-width" (ej. transformer): el product.tpl del tema deja vacío
   content_wrapper/content e imprime la ficha dentro de 'full_width_top'. Se reemplaza ese
   bloque para mostrar el pack. *}
{block name='full_width_top'}
  {if isset($layout) && $layout == 'layouts/layout-full-width.tpl'}
    <div class="container">
      {include file='module:pm_advancedpack/views/templates/front/1.7/pack-main.tpl'}
    </div>
  {/if}
{/block}

{* Resto de layouts (tema classic y similares) *}
{block name='content'}
  {if !isset($layout) || $layout != 'layouts/layout-full-width.tpl'}
    {include file='module:pm_advancedpack/views/templates/front/1.7/pack-main.tpl'}
  {/if}
{/block}
