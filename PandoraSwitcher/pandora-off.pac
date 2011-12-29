function FindProxyForURL(url, host)
{
if (shExpMatch(host, "www.pandora.com")) return "PROXY luongo.dyndns.tv:2229";
return "DIRECT";
}
