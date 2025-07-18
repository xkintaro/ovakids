import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './kintaroProducts.css';

import {
    KintaroTitle1, KintaroDescription, KintaroDropDown1, KintaroButton1
} from 'kintaro-ui/src';

import { KintaroContentBox1 } from '../components/KintaroContentBox';
import AnimeGirl from '/anime.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // Get both search and category_id from URL parameters
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";
    const categoryId = searchParams.get("category_id");

    useEffect(() => {
        fetch(`/${BASE_URL}/data/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("products.json yüklenemedi:", err));

        fetch(`/${BASE_URL}/data/categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("categories.json yüklenemedi:", err));
    }, []);

    const getCategoryTitles = (category_ids) => {
        return category_ids
            .map(id => categories.find(cat => cat.id === id)?.title)
            .filter(Boolean)
            .join(', ');
    };

    const getCategoryTitleById = (id) => {
        return categories.find(cat => cat.id === parseInt(id))?.title || "Kategori";
    };

    const handleClearSearch = () => {
        searchParams.delete("search");
        setSearchParams(searchParams);
    };

    const filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);

        // Category filter - only apply if category_id exists in URL
        const matchesCategory =
            !categoryId ||
            product.category_ids.includes(parseInt(categoryId));

        return matchesSearch && matchesCategory;
    });

    return (
        <div className='kintaro-explore'>
            <div className="kintaro-explore-head">
                <KintaroTitle1 title={
                    categoryId
                        ? `${getCategoryTitleById(categoryId)} Kategorisi`
                        : "Tüm Ürünlerimiz"
                } />
                <KintaroDescription
                    text={
                        searchTerm && categoryId
                            ? `"${searchTerm}" için ${getCategoryTitleById(categoryId)} kategorisindeki sonuçlar:`
                            : searchTerm
                                ? `"${searchTerm}" için bulunan sonuçlar:`
                                : categoryId
                                    ? `${getCategoryTitleById(categoryId)} kategorisindeki ürünler`
                                    : "Miniklerin sevdiği tüm parçalar burada! Rahatlık ve şıklığı bir arada sunan ürünleri keşfet."
                    }
                    textAlign={"center"}
                />

                <div style={{ marginTop: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
                    <KintaroDropDown1
                        options={[
                            { value: "all", label: "Tüm Ürünlerimiz" },
                            ...categories.map(cat => ({
                                value: String(cat.id),
                                label: cat.title
                            }))
                        ]}
                        value={categoryId || "all"}
                        onSelect={(option) => {
                            const newCategoryId = option.value;
                            if (newCategoryId === "all") {
                                searchParams.delete("category_id");
                            } else {
                                searchParams.set("category_id", newCategoryId);
                            }
                            window.location.search = searchParams.toString();
                        }}
                        placeholder="Kategori seçiniz"
                    />
                    {searchTerm && (
                        <KintaroButton1
                            title="Aramayı Temizle"
                            onClick={handleClearSearch}
                        />
                    )}
                </div>
            </div>

            <div className="kintaro-content-box-1-container">
                {filteredProducts.length === 0 ? (
                    <div className="not-content">
                        <img src={AnimeGirl} alt="" className="not-content-image" />
                        <KintaroDescription text={
                            searchTerm && categoryId
                                ? `"${searchTerm}" için ${getCategoryTitleById(categoryId)} kategorisinde sonuç bulunamadı.`
                                : searchTerm
                                    ? `"${searchTerm}" için sonuç bulunamadı.`
                                    : categoryId
                                        ? `${getCategoryTitleById(categoryId)} kategorisinde henüz ürün bulunmuyor.`
                                        : "Henüz ürün bulunmuyor."
                        } />
                    </div>
                ) : (
                    filteredProducts.map(product => (
                        <KintaroContentBox1
                            key={product.id}
                            content={{
                                ...product,
                                categoriesText: getCategoryTitles(product.category_ids),
                                image: product.image.startsWith('http')
                                    ? product.image
                                    : product.image.replace('base/', `/${BASE_URL}/`)
                            }}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default KintaroProducts;