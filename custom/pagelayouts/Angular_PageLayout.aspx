<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePointWebControls:CSSRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server" />
    <PublishingWebControls:EditModePanel runat="server">
        <!-- Styles for edit mode only-->
        <SharePointWebControls:CSSRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
                                               after="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server" />
    </PublishingWebControls:EditModePanel>
    <script src="/_catalogs/masterpage/custom/js/angular.js"></script>
    <script src="/_catalogs/masterpage/custom/js/ngDirectives.js"></script>
    <script src="/_catalogs/masterpage/custom/js/HelperFunctions.js"></script>
    <script>
        var TemplateRenderTrigger = 2;
    </script>
</asp:Content>
<asp:Content ContentPlaceholderId="PlaceHolderMain" runat="server">
    <div id="CSWP-1"><WebPartPages:WebPartZone runat="server" Title="CSWP 1" ID="CSWP1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>
    <div id="CSWP-2"><WebPartPages:WebPartZone runat="server" Title="CSWP 2" ID="CSWP2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>
</asp:Content>
