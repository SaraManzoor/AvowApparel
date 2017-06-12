<%@ Page Title="" Language="C#" MasterPageFile="~/admin.Master" AutoEventWireup="true" CodeBehind="UpdateProduct.aspx.cs" Inherits="Avowapparel.UpdateProduct" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <div class="html not-front not-logged-in no-sidebars page-user page-user-login i18n-en lang-en section-user">
        <h1 id="page-title" class="title">Home</h1>
        <div id="block-system-main" class="block block-system block-even">
            <h1 class="profile__title">Update Product</h1>
            <label for="proNameTxt">
                <span>Name</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proNameTxt" name="proNameTxt" size="60"></asp:TextBox>

            <label for="proDescriptionTxt">
                <span>Description</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proDescriptionTxt" name="proDescriptionTxt" size="60" />

            <label for="proColorTxt">
                <span>Color</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proColorTxt" name="proColorTxt" size="60" />

            <label for="proSizeTxt">
                <span>Size</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proSizeTxt" name="proSizeTxt" size="60" />

            <label for="proOtherFeatureTxt">
                <span>Other Features</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proOtherFeatureTxt" name="proOtherFeatureTxt" size="60" />

            <label for="proImageTxt">
                <span>Image</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:FileUpload runat="server" ID="proImageTxt" name="proImageTxt" />


            <label for="proPriceTxt">
                <span>Price</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proPriceTxt" name="proPriceTxt" size="60" />


            <label for="proDiscountTxt">
                <span>Discount</span>
                <span class="form-required" title="This field is required.">*</span></label>
            <asp:TextBox runat="server" ID="proDiscountTxt" name="proDiscountTxt" size="60" />

            Select a Course:
                        <asp:DropDownList ID="CategoryDropDownList" runat="server"
                            DataTextField="CategoryName" DataValueField="CategoryID">
                        </asp:DropDownList>
            <br />

            <input type="hidden" runat="server" id ="hdfproductID" />
            <asp:Button ID="updateProduct" Text="Submit" runat="server" CssClass="secondary button radius form-submit" OnClick="updateProduct_Click"  />
             <label id="errorList" style="color:red" runat="server"></label>

        </div>

    </div>


</asp:Content>
