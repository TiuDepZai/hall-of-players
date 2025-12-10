import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar/>

            <section id="about-us" class="bg-gradient-to-r from-blue-100 to-blue-50 py-12">
            <div class="max-w-5xl mx-auto px-6">
                <h2 class="text-4xl font-extrabold text-center text-blue-900 mb-8 animate-fadeIn">
                About <span class="text-red-800">Us</span>
                </h2>

                <div class="space-y-6 text-blue-800 text-lg leading-relaxed">
                <img src="/assets/QUT_GP_Table.jpg" alt="Hall of Players" 
                    class="float-left w-full md:w-1/3 mr-6 mb-4 rounded-xl shadow-lg animate-fadeIn" />

                <p class="animate-slideUp">
                    Hall of Players started from a simple desire: to give back to the QUT community. Having spent time at this incredible place, I wanted to build something that could commemorate the experience, while celebrating the people who make it memorable. From that idea, Hall of Players was born—a space dedicated to recognizing and honoring the players who bring energy, skill, and camaraderie to the table tennis scene at QUT.
                </p>

                <p class="animate-slideUp delay-200">
                    At its heart, Hall of Players is all about celebrating the individuals who make the game fun and inclusive. Whether you’re a seasoned player or just starting out, the platform highlights those who excel, contribute, and inspire others through their love of the sport. It’s a way to shine a light on the people who make the game more than just a match—people who make it a community.
                </p>

                <p class="animate-slideUp delay-400">
                    One of the most fun and unique aspects of our culture is the term <strong class="text-red-800">“uncle”</strong> 🏓. In our world, an uncle is someone who’s not only exceptionally good at table tennis but also generous with their knowledge and time. They are willing to teach newer players, offer guidance, and welcome everyone with open arms. There’s no judgment, no discrimination—just a shared love for the game and a commitment to helping others grow.
                </p>

                <p class="animate-slideUp delay-600">
                    Hall of Players is more than just recognition; it’s a celebration of skill, mentorship, and community. It’s about honoring the players who make QUT’s table tennis scene vibrant and inspiring, while giving everyone a chance to be part of something bigger than a match.
                </p>
                </div>

                <div class="mt-10 text-center animate-bounce">
                <span class="text-3xl text-yellow-500">✨🏓✨</span>
                </div>
            </div>
            </section>


        </div>
    )
}