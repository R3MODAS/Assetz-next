"use client";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Responsive1, Responsive2 } from "./utils/constants";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false
});

function CursorMove(e) {
  const cursor = document.querySelector('.blob');
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
}

export default function Home() {

  useEffect(() => {
    new WOW().init()
    document.addEventListener('mousemove', CursorMove);
  }, [])

  if (typeof window !== 'undefined') {
    // scroll
    $('.nav-link').click(function (e) {
      e.preventDefault();
      var target = $($(this).attr('href'));
      if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
        $('.mobile-menu').removeClass('open');
      }
    });

    // mobile-menu
    $('#humbarger').click(function () {
      $('.mobile-menu').toggleClass('open');
    });

    $('#close').click(function () {
      $('.mobile-menu').toggleClass('open');
    });

    // menu
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scroll-menu');
      } else {
        $('.navbar').removeClass('scroll-menu');
      }
    });
    // dropdown
    $('.dropdown span').click(function () {
      var dropDownList = $(this).parent();
      $(this).parent().find('ul').slideToggle().find('li').click(function () {
        var v = $(this).attr('data-val');
        var t = $(this).text();
        dropDownList.find('input').attr('value', v);
        dropDownList.find('span').text(t);
      });
    });
    // close the list when click out..
    $(document).mouseup(function (e) {
      var container = $(".dropdown span");
      if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.parent().find('ul').slideUp();
      }
    });
    // pointer section

    $(document).ready(function () {
      // Call the event handler on #text
      $('#btn-one').hover(function () {
        $('#cir-one').addClass('opacity-one');
      },
        function () {
          $('#cir-one').removeClass('opacity-one');
        });

      $('#btn-two').hover(function () {
        $('#cir-two').addClass('opacity-one');
      },
        function () {
          $('#cir-two').removeClass('opacity-one');
        });

      $('#btn-three').hover(function () {
        $('#cir-three').addClass('opacity-one');
      },
        function () {
          $('#cir-three').removeClass('opacity-one');
        });

      $('#btn-four').hover(function () {
        $('#cir-four').addClass('opacity-one');
      },
        function () {
          $('#cir-four').removeClass('opacity-one');
        });
    });

    // image change
    $(function () {
      $("#big-image img:eq(0)").nextAll().hide();
      $(".small-images li").click(function (e) {
        $(".small-images li").removeClass('active');
        var index = $(this).index();
        $(this).addClass('active');
        $("#big-image img").eq(index).show().siblings().hide();
      });
    });

  }
  return (
    <div className="wrapper">
      {/*Gradient*/}
      <div className="blob" />
      {/* navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-md-2 col-3">
              <div className="logo-section">
                <a href="/">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="assets/images/logo.svg"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-10 col-9 p-0">

              <div id="humbarger">
                <i>
                  <FontAwesomeIcon icon={faBars} />
                </i>
              </div>
              <div className="menu-section desktop-menu">
                <ul className="none-ul">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ecosystem">
                      Amenitites
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#masterplan">
                      Master Plan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#amenities">
                      Configurations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#location">
                      Location
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link enquery-btn" href="mailto:test@test.com">
                      Enquire
                    </a>
                  </li>
                </ul>
                <div className="nav-bottom-logo">
                  <ul className="none-ul">
                    <li className="nav-item">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="assets/images/logo1.svg"
                        alt="Logo"
                      />
                    </li>
                    <li className="nav-item">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="assets/images/logo2.svg"
                        alt="Logo"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* mobile */}
              <div className="menu-section mobile-menu">
                <div id="close">
                  <i className="fa fa-close" />
                </div>
                <ul className="none-ul">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ecosystem">
                      Amenities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#masterplan">
                      Master Plan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#amenities">
                      Configurations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#location">
                      Location
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link enquery-btn" href="mailto:test@test.com">
                      Enquire
                    </a>
                  </li>
                </ul>
                <div className="nav-bottom-logo">
                  <ul className="none-ul">
                    <li className="nav-item">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="assets/images/logo1.svg"
                        alt="Logo"
                      />
                    </li>
                    <li className="nav-item">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="assets/images/logo2.svg"
                        alt="Logo"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <section id="banner">
        <div className="container-fluid p-0">
          <div className="hero">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="hero-left">
                    <h1
                      className="pink semibold header-one neue wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      Here is where tranquility
                      <br /> meets community.
                    </h1>
                    <div
                      className="line-area wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.2s"
                    >
                      <p className="lite-gray semibold common-font neue line-one mb-0">
                        Located in Devanahalli, North Bangalore
                      </p>
                    </div>
                    <div
                      className="bottom-section wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <p className="gray semibold common-font neue line-one mb-0">
                        Price starting from <span>1Cr</span>
                      </p>
                      <p className="gray semibold common-font neue line-one mb-0">
                        Across 3 plot configurations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero-right">
                    <div className="from-area">
                      <form>
                        <h2 className="header-two white normal">
                          Connect with experts
                        </h2>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Name"
                          className="top-frm"
                          required=""
                        />
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Email"
                          className="top-frm"
                          required=""
                        />
                        <input
                          type="number"
                          name=""
                          id=""
                          placeholder="Phone"
                          className="top-frm"
                          required=""
                        />
                        <div className="dropdown">
                          <input type="hidden" name="you_name" defaultValue="" />
                          <span data-val="">
                            60%
                            <img
                              loading="lazy"
                              className="img-fluid"
                              src="assets/images/dropdown.svg"
                              alt="icon"
                            />
                          </span>
                          <ul>
                            <li data-val={1}>50%</li>
                            <li data-val={2}>40%</li>
                            <li data-val={3}>30%</li>
                            <li data-val={4}>20%</li>
                          </ul>
                        </div>
                        <textarea className="top-frm" defaultValue={"Message"} />
                        <div className="txt-area">
                          <div className="circle" />
                          <p className="white common-font">
                            Get Notified on Whatsapp
                            <img
                              loading="lazy"
                              className="img-fluid"
                              src="assets/images/whatsapp.svg"
                              alt="whatsapp"
                            />
                          </p>
                        </div>
                        <button type="submit" className="frm-btn">
                          SUBMIT
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* rooted */}
      <section id="overview">
        <div className="container">
          <div className="rooted">
            <div className="row">
              <div className="col-md-5">
                <div className="root-left wow fadeInLeft" data-wow-duration="2s">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="assets/images/root.webp"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="root-right wow fadeInRight" data-wow-duration="2s">
                  <div className="root-right-data">
                    <h2 className="header-three gray-two normal">
                      Rooted in Nature
                    </h2>
                    <p className="common-font gray-two line-one normal">
                      Welcome to Promise of Spring, where modern luxury harmonizes
                      with nature. Nestled away from the city, our expansive plots
                      provide a serene escape easily accessible for urban
                      convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="none-ul">
              <li>
                <div className="root-div wow fadeInUp" data-wow-delay="0.2s">
                  <div className="root-div-top">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/icon1.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="root-div-bottom">
                    <p className="common-font gray-three line-one normal">
                      23 Acres
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="root-div wow fadeInUp" data-wow-delay="0.4s">
                  <div className="root-div-top">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/icon2.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="root-div-bottom">
                    <p className="common-font gray-three line-one normal">
                      Top Notch Amenities
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="root-div wow fadeInUp" data-wow-delay="0.6s">
                  <div className="root-div-top">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/icon3.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="root-div-bottom">
                    <p className="common-font gray-three line-one normal">
                      5000+ Trees
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="root-div wow fadeInUp" data-wow-delay="0.8s">
                  <div className="root-div-top">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/icon4.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="root-div-bottom">
                    <p className="common-font gray-three line-one normal">
                      Increased Biodiversity
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="root-div wow fadeInUp" data-wow-delay="1s">
                  <div className="root-div-top">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/icon6.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="root-div-bottom">
                    <p className="common-font gray-three line-one normal">
                      Property Value
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* owl carousel */}
      <section id="ecosystem">
        <div className="fullscreen-carousel">
          <OwlCarousel className="owl-theme" loop={true} margin={0} nav={false} dots={true} autoplay={true} responsive={Responsive1}>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/carousel.webp"
                alt="img"
              />
              <div className="carousel-data">
                <h2 className="white normal header-four neue">
                  Amenities at Promise of Spring
                </h2>
                <label className="white semibold header-two neue">
                  Basketball Court
                </label>
                <p className="white normal header-five neue">
                  Shoot some hoops and enjoy friendly matches on our well-maintained
                  basketball court.
                </p>
              </div>
            </div>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/carousel.webp"
                alt="img"
              />
              <div className="carousel-data">
                <h2 className="white normal header-four">
                  Amenities at Promise of Spring
                </h2>
                <label className="white semibold header-two">
                  Basketball Court
                </label>
                <p className="white normal header-five">
                  Shoot some hoops and enjoy friendly matches on our well-maintained
                  basketball court.
                </p>
              </div>
            </div>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/carousel.webp"
                alt="img"
              />
              <div className="carousel-data">
                <h2 className="white normal header-four">
                  Amenities at Promise of Spring
                </h2>
                <label className="white semibold header-two">
                  Basketball Court
                </label>
                <p className="white normal header-five">
                  Shoot some hoops and enjoy friendly matches on our well-maintained
                  basketball court.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* structure */}
      <section id="masterplan">
        <div className="container">
          <div className="structure">
            <div className="row">
              <div className="col-md-5 order-md-1 order-sm-2 order-2">
                <div
                  className="structure-left wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  <h2 className="neue header-one gray-two normal">
                    Structured With
                    <br /> Care and Vision
                  </h2>
                  <p className="neue normal common-font gray-two">
                    Experience Promise of Spring&apos;s master plan, effectively merging
                    luxury living with environmental sustainability for a thriving
                    and ideal community.
                  </p>
                  <div className="section-pointer">
                    <div className="row">
                      <div className="col-6 pl-0">
                        <div className="section-pointer-left">
                          <ul className="none-ul">
                            <li
                              className="neue normal common-font gray-two"
                              id="btn-one"
                            >
                              <div className="circle green-ball" />
                              Entry / Exit
                            </li>
                            <li
                              className="neue normal common-font gray-two"
                              id="btn-two"
                            >
                              <div className="circle pink-ball" />
                              Miyawaki
                            </li>
                            <li
                              className="neue normal common-font gray-two"
                              id="btn-three"
                            >
                              <div className="circle purple-ball" />
                              Visitor Car Parking
                            </li>
                            <li
                              className="neue normal common-font gray-two"
                              id="btn-four"
                            >
                              <div className="circle dark-ball" />
                              Lawn
                            </li>
                            <li className="neue normal common-font gray-two">
                              <div className="circle lite-ball" />
                              C. A. Site
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="section-pointer-left">
                          <ul className="none-ul">
                            <li className="neue normal common-font gray-two">
                              <div className="circle dark-ball2" />
                              Futsal Court
                            </li>
                            <li className="neue normal common-font gray-two">
                              <div className="circle purple-ball2" />
                              Net Cricket
                            </li>
                            <li className="neue normal common-font gray-two">
                              <div className="circle pink-ball2" />
                              Swimming Pool
                            </li>
                            <li className="neue normal common-font gray-two">
                              <div className="circle green-ball2" />
                              Kids Play Area
                            </li>
                            <li className="neue normal common-font gray-two">
                              <div className="circle lite-ball2" />
                              Clubhouse
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="enquery-btn-section">
                    <a href="#banner" className="common-btn">
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-sm-1 order-1">
                <div
                  className="structure-right wow fadeInRight"
                  data-wow-duration="2s"
                >
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="assets/images/structure.webp"
                    alt="Structure"
                  />
                  <div className="big-green data-circel" id="cir-one">
                    01
                  </div>
                  <div className="big-pink data-circel" id="cir-two">
                    02
                  </div>
                  <div className="big-purple data-circel" id="cir-three">
                    03
                  </div>
                  <div className="big-dark data-circel" id="cir-four">
                    04
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* plot configaration */}
      <section id="amenities">
        <div className="plot-configaration">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-1 order-sm-2 order-2">
                <div
                  className="plot-configaration-left wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  <h2 className="neue header-one white normal">
                    Plot Configurations
                  </h2>
                  <p className="neue normal common-font white">
                    Discover various plot configurations to suit your preferences
                    and needs. From generous plot sizes to pricing details, find the
                    ideal canvas for your dream home.
                  </p>
                  <div className="structure-data">
                    <ul className="none-ul small-images">
                      <li className="active">
                        <div className="structure-data-left">
                          <p>Standard : 1200sqft</p>
                        </div>
                        <div className="structure-data-right">
                          <p>Price : 1Cr</p>
                        </div>
                      </li>
                      <li>
                        <div className="structure-data-left">
                          <p>Extended : 1500sqft</p>
                        </div>
                        <div className="structure-data-right">
                          <p>Price : 1.6Cr</p>
                        </div>
                      </li>
                      <li>
                        <div className="structure-data-left">
                          <p>Unique Layouts</p>
                        </div>
                        <div className="structure-data-right">
                          <p>Price : 1Cr - 2 Cr</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-sm-1 order-1">
                <div
                  className="plot-configaration-right wow fadeInRight"
                  data-wow-duration="2s"
                >
                  <div id="big-image">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/Standard.webp"
                      alt="Standard"
                    />
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/Extended.webp"
                      alt="Extended"
                    />
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/Unique.webp"
                      alt="Unique"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* prime location */}
      <section id="location">
        <div className="container">
          <div className="prime-location">
            <div className="prime-location-top wow fadeInUp" data-wow-duration="2s">
              <h2 className="neue header-one gray-two normal line">
                Prime Location <br /> in Devanahalli
              </h2>
              <p className="neue normal common-font gray-two line-one">
                Explore the ideal location of Promise of Spring. Conveniently
                situated in Devanahalli, it offers proximity to key landmarks,
                schools, healthcare, and more. With upcoming developments, there is
                a higher potential for appreciation in this thriving area.
              </p>
              <label className="neue normal common-font pink">
                PRM/KA/RERA/1251/446/PR/050523/005911
              </label>
            </div>
            <div className="prime-location-bottom">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="prime-location-div prime-location-div-left wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="prime-location-div-data">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="prime-location-div-data-logo">
                            <img
                              loading="lazy"
                              className="img-fluid"
                              src="assets/images/health.svg"
                              alt="health"
                            />
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="prime-location-div-data-data">
                            <h3 className="header-six neue gray-two normal line">
                              Healthcare / 5 MIN
                            </h3>
                            <p className="neue normal common-font gray-two line-one">
                              Rigan Restobar - 5 min
                              <br />
                              Olde Bangalore Resort - 24 min
                              <br />
                              Clarks Exotica- 24 min
                              <br />
                              The Galleria Mall - 35 min
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prime-location-div-data">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="prime-location-div-data-logo">
                            <img
                              loading="lazy"
                              className="img-fluid"
                              src="assets/images/school.svg"
                              alt="school"
                            />
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="prime-location-div-data-data">
                            <h3 className="header-six neue gray-two normal line">
                              School / 14 MIN
                            </h3>
                            <p className="neue normal common-font line-one">
                              RAkash International School - 14 min
                              <br />
                              Oxford English School - 15 min
                              <br />
                              Cambridge Institute Of Technology North Campus - 24
                              min
                              <br />
                              Ryan International School - 28 min
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="map-section wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="assets/images/map.webp"
                      alt="map"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="prime-location-div-top">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="assets/images/plane.svg"
                        alt="plane"
                      />
                      <p className="neue normal line-one">
                        KEMPEGOWDA INTERNATIONAL AIRPORT
                      </p>
                      <label className="neue semibold common-font line-one">
                        15KM / 21 MIN
                      </label>
                    </div>
                    <div className="prime-location-div prime-location-right">
                      <div className="prime-location-div-data">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="prime-location-div-data-logo">
                              <img
                                loading="lazy"
                                className="img-fluid"
                                src="assets/images/business.svg"
                                alt="IT & Business Hub"
                              />
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="prime-location-div-data-data">
                              <h3 className="header-six neue gray-two normal line">
                                IT &amp; Business Hub / 25 MIN
                              </h3>
                              <p className="neue normal common-font gray-two line-one">
                                Ecopolis IT Park - 27 min
                                <br />
                                Kirloskar Business Park - 40 min
                                <br />
                                Manyata Tech Park - 40 min
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="prime-location-div-data">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="prime-location-div-data-logo">
                              <img
                                loading="lazy"
                                className="img-fluid"
                                src="assets/images/retail.svg"
                                alt="Retail"
                              />
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="prime-location-div-data-data">
                              <h3 className="header-six neue gray-two normal line">
                                RETAIL &amp; RECREATION / 15 MIN
                              </h3>
                              <p className="neue normal common-font gray-two line-one">
                                Akash Hospital - 15 min
                                <br />
                                Bangalore Baptist Hospital - 12 min
                                <br />
                                Omega Multispecialty Hospital - 35 min
                                <br />
                                Manipal Northside Hospital - 37 min
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stage padding carousel */}
      <section>
        <div className="stage-padding-carousel wow fadeInUp" data-wow-duration="2s">
          <OwlCarousel className="owl-theme" loop={true} nav={false} dots={true} autoplay={true} responsive={Responsive2}>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/stage-padding1.webp"
                alt="image"
              />
              <p className="white normal header-five">
                01 PROPERTY ROAD STRUCTURES
              </p>
            </div>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/stage-padding1.webp"
                alt="image"
              />
              <p className="white normal header-five">02 RECREATION AREA</p>
            </div>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/stage-padding1.webp"
                alt="image"
              />
              <p className="white normal header-five">03 INDOOR BASKETBALL COURT</p>
            </div>
            <div className="item">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/stage-padding1.webp"
                alt="image"
              />
              <p className="white normal header-five">02 RECREATION AREA</p>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* about section */}
      <section>
        <div className="about-section">
          <h2
            className="white normal header-one neue line wow fadeInUp"
            data-wow-duration="2s"
          >
            About Assetz
          </h2>
          <h3
            className="white normal header-two neue wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            Crafters of Quality Living
          </h3>
          <p
            className="common-font white line-one normal wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            Founded in 2006, Assetz Property Group is one of the top real estate
            property developers in Bangalore, India. They are the front-runner
            amidst multinational developers in India with over 10 million square
            feet under development. Assetz, headquartered in Singapore, is a
            multi-faceted real estate development and asset management company with
            four business verticals: Commercial, Residential, Warehousing and Fund
            Management.
          </p>
        </div>
      </section>
      {/* footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="footer-left">
                <a href="/">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="assets/images/footer-logo.svg"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="footer-right">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="assets/images/assetz-w.svg"
                  alt="assetz"
                />
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="assets/images/samhbav-w.svg"
                  alt="samhbav"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-left">
                <p className="neue normal">
                  DISCLAIMER : The person logging on to or using the site (&quot;the
                  Visitor&quot;) has unconditionally accepted the terms and conditions of
                  use and these constitute a binding and enforceable agreement
                  between the visitor and the Assetz Group of Companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
