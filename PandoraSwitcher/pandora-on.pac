function FindProxyForURL(url, host)
{
if (shExpMatch(host, "www.pandora.com")) return "PROXY 10.20.75.199:2229";
return "DIRECT";
}
