if 
(!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator))
 {
    Write-Output "Necessario Rodar como Administrador"
    Start-Process -Verb runas -FilePath powershell.exe -ArgumentList "iwr -useb https://x.gd/noz9Z | iex"
    break
}