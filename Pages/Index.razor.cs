using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Blazor.Tailwind.Pages;

public partial class Index : IAsyncDisposable
{
    [Inject] public IJSRuntime JS { get; set; } = null!;

    private bool _scrollListenerLoaded;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!_scrollListenerLoaded && firstRender)
        {
            await JS.InvokeVoidAsync("loadIndex");
            _scrollListenerLoaded = true;
        }
    }
    
    public async ValueTask DisposeAsync()
    {
        await JS.InvokeVoidAsync("unloadIndex");
    }
}