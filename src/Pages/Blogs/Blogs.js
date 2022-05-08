import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='w-75 mx-auto my-5 blogs_Container'>
            <Accordion className='mb-5 py-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between Node.JS and Javascript</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>Node Js</th>
                                    <th>Javascript</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> NodeJs হল একটি ক্রস-প্ল্যাটফর্ম এবং ওপেনসোর্স Javascript Runtime Environment যা Javascript কে সার্ভার-সাইডে চালানোর অনুমতি দেয়।</td>
                                    <td>Javascript একটি Scripting language. এটিকে সংক্ষেপে JS বলা হয়। Javascript একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয়। Javascript হচ্ছে ECMA স্ক্রিপ্টের আপডেট সংস্করণ।</td>
                                </tr>
                                <tr>
                                    <td> NodeJs এর বেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।</td>
                                    <td>Javascript শুধুমাত্র Browser এ চালানো যায়।</td>
                                </tr>
                                <tr>
                                    <td> Nodejs এর HTML ট্যাগ যোগ করা যায় না।</td>
                                    <td> Javascript HTML যোগ করতে পারে।</td>
                                </tr>
                                <tr>
                                    <td>Nodejs সার্ভার-সাইড ডেভেলপমেন্টে ব্যবহার করা হয়।</td>
                                    <td> Javascript ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between `SQL` and `NOSQL` databases.</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>SQL</th>
                                    <th>NOSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> SQL ডাটাবেসগুলি relational</td>
                                    <td>NoSQL ডাটাবেসগুলি non-relational</td>
                                </tr>
                                <tr>
                                    <td>SQL ডাটাবেস স্ট্রাকচার্ড কোয়েরি Language ব্যবহার করে এবং একটি পূর্বনির্ধারিত স্কিমা আছে</td>
                                    <td> NoSQL ডাটাবেসে unstructured ডেটার জন্য dynamic schemas রয়েছে</td>
                                </tr>
                                <tr>
                                    <td> SQL ডাটাবেসগুলি vertically scalable</td>
                                    <td>NOSQL ডাটাবেসগুলি horizontally scalable</td>
                                </tr>
                                <tr>
                                    <td>SQL ডাটাবেসগুলি টেবিল-ভিত্তিক Data প্রদান করে।</td>
                                    <td> NoSQL ডাটাবেস হল document, key-value, graph, or wide-column stores</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of `jwt` and how does it work</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>JWT Token</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JWT Token ডিফল্ট HS256( HMAC-SHA256) Alogrithm ব্যবহার করে। HS256 Algorithm মূলত secret base cryptographic hash function, যা payload এর সাথে shared secret যোগ করে hash তৈরি করে থাকে। যখন কোন স্বাধীন সার্ভিস এই token verify করতে যাবে, তারও কাছে এই shared secret থাকতে হবে, ভ্যালিড hash তৈরি করে, verify করার জন্য।</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;