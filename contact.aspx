<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="contact.aspx.cs" Inherits="Avowapparel.contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div id="main" class="nine push-three columns">
        <h1 id="page-title" class="title">Contact</h1>
        <div id="block-system-main" class="block block-system block-even">
            <div>
                <div id="node-64" class="node node-webform view-mode-full">
                        
                            <label>
                                <span class="secondary label" style="float: none!important">Your name</span> 
                                <span class="form-required" title="This field is required.">*</span>

                            </label>
                            <asp:TextBox runat="server" ID="proNameTxt" name="proNameTxt" size="60"></asp:TextBox>
                           
                             <labe">
                                <span class="secondary label" style="float: none!important">Your e-mail address</span> 
                                <span class="form-required" title="This field is required.">*</span>

                            </labe>
                            <asp:TextBox runat="server" ID="proEmailTxt" name="proNameTxt" size="60"></asp:TextBox>

                             <label>
                                <span class="secondary label" style="float: none!important">Subject</span> 
                                <span class="form-required" title="This field is required.">*</span>

                            </label>
                            <asp:TextBox runat="server" ID="proSubjectTxt" name="proNameTxt" size="60"></asp:TextBox>
                            
                             <label>
                                <span class="secondary label" style="float: none!important">Message</span> 
                                <span class="form-required" title="This field is required.">*</span>

                            </label>
                            <textarea runat="server" id="proMessageTxt" name="proNameTxt" size="60" cols="60" rows="8"  ></textarea>
                            
                            
                            
                          
                            
                                <asp:Button CssClass="secondary button radius form-submit" ID="sendContact" runat="server" Text="SEND" OnClick="sendContact_Click" />
                             <label id="errorList" style="color:red" runat="server"></label>
                        </div>
            </div>
        </div>
        
    </div>
    <div id="sidebar-first" class="three pull-nine columns sidebar panel ">
        <div id="block-block-4" class="block block-block block-even">
            <div>
                <p><strong>CONTACT</strong></p>
                <p>If you'd like to contact us please fill out the message box and someone will get back to you within 48 hours.</p>
                <p>You can also contact us by mail at:</p>
                <p>
                    <strong>AVOW APPAREL</strong><br />
                    484 Lake Park Ave. No.678<br />
                    Oakland, CA 94610
                </p>
            </div>
        </div>
    </div>


</asp:Content>
