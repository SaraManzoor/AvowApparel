<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Avowapparel.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="block-nivo-slider-nivo-slider" class="block block-nivo-slider block-even">
        <div>
            <div class="slider-wrapper theme-default">
                <div class="ribbon"></div>
                <div id="slider" class="nivoSlider">
                    <img class="slide" id="slide-0" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_10.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_10.jpg" alt="" title="" />
                    <img class="slide" id="slide-1" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_1.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_1.jpg" alt="" title="" />
                    <img class="slide" id="slide-2" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_2.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_2.jpg" alt="" title="" />
                    <img class="slide" id="slide-3" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_8.jpg" data-transition="" src="/Content/Images/banner/LkBk_Aug_8.jpg" alt="" title="" />
                    <img class="slide" id="slide-4" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_3_For-Nov-Launch.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_3_For-Nov-Launch.jpg" alt="" title="" />
                    <img class="slide" id="slide-5" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_5.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_5.jpg" alt="" title="" />
                    <img class="slide" id="slide-6" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_6.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_6.jpg" alt="" title="" />
                    <img class="slide" id="slide-7" data-thumb="https://www.avowapparel.com/sites/default/files/banner/LkBk_Aug_9.jpg" data-transition="fade" src="/Content/Images/banner/LkBk_Aug_9.jpg" alt="" title="" />

                </div>
            </div>
        </div>
    </div>
    <div id="block-mailchimp-lists-website-signup" class="block block-mailchimp-lists block-odd">
        <h2 class="block-title">Join Our Mailing List</h2>
        <div>
            <form class="mailchimp-lists-user-subscribe-form" action="/" method="post" id="mailchimp-lists-user-subscribe-form-website-signup" accept-charset="UTF-8">
                <div>
                    <div id="mailchimp-newsletter-website_signup" class="mailchimp-newsletter-wrapper">
                        <div id="edit-mailchimp-lists-mailchimp-website-signup-title" class="form-item form-type-item">
                        </div>
                        <div class="form-item form-type-textfield form-item-mailchimp-lists-mailchimp-website-signup-mergevars-EMAIL">
                            <label for="edit-mailchimp-lists-mailchimp-website-signup-mergevars-email"><span class="secondary label">Email Address</span> <span class="form-required" title="This field is required.">*</span></label>
                            <input placeholder="email" type="text" id="edit-mailchimp-lists-mailchimp-website-signup-mergevars-email" name="mailchimp_lists[mailchimp_website_signup][mergevars][EMAIL]" value="" size="25" maxlength="128" class="form-text required" />
                        </div>
                        <p class="notice-join">Join our mailing list for information on events, new collections, special offers, and all things Avow!</p>
                    </div>
                    <input type="submit" id="edit-submit" name="op" value="Join" class="form-submit" /><input type="hidden" name="form_build_id" value="form--h_hu2xzuNheJksa4eKp7GCpZRFMARU8KmofXJHKg0A" />
                    <input type="hidden" name="form_id" value="mailchimp_lists_user_subscribe_form_website_signup" />
                </div>
            </form>
        </div>
    </div>
    <div id="first-time">
        <p>No front page content has been created yet.</p>

    </div>
</asp:Content>
