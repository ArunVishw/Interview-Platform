import React from 'react'
import { Data } from '../../context/DataContext'

export default function Sidebar() {
    return (
        <Data.Consumer>{ (context) => {
            return (
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
                    <div className="box border-bottom">
                            <div className="bg-primary text-center py-1 text-white">Connect with me</div>
                            <div className="bg-light px-2 py-3">
                            <ul className="list-group list-group-flush">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <a className="btn-floating btn-fb btn-sm" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADHUlEQVQ4ja2UXUhTYRjH/zvbzj7PNufmaalT05rRMoo+CCERLJAKoiy6KdAuCyIqpcAugqSgi7rIrgKxq6CIIkKEJIg+JFlWFqZpppvavo7b2dzZxzmnC+tsns3owufy+f+f3/s8L+/7AKscipUEc6nrqN5obSNNVrtSSVJ8mmNSiXgoGQv5EoHpnkSCffO/QI29etvj6t2HG4sr6rRyURR4+Cc98dmRl8Mx/4+uaMD7PFdXyvx6ev3OgS0HzjZS9gpVwQ4UBIzWUtJRW+9U68zNHBuiOTbYXxBY5HTf23ro/H7SYM4DiaII1j8FLjIHBaGCitSBsjt1BqujLhb4ucjFwu8AgJBaKyprrtq+v5nUm/JgCe8Q6PhbtO4rRfvJnTCGXklasdNtKK7cfAaABQCkscx02TnHxnqbHJaMhbGnrhjHjrdIObPZgmCOZ93ulurwzNdLjPdbx19gmdVZ5y50Z8ngOJrajgEA7vc+wLuPPyFqS2CwZD2kjoLe6tjBeL8tdWhaU9O21t3gKARUZuKw2pYafz00Dqq2uZANGn1RKQCFCgBIPeUidZRsVAaJaBApZk7KpRYjYL2fASUJyuFa5teabEYAFhUAaAxmu/zEtO8tzrYehI1ukHLXr11AkuPQfbcXGbjkJQqpQ0KpJuWqSGix0e2GUpV9jiU0vaSpjXkjL4Z8QQCMCgD4VDIiN6ht69HReQsaRQrXui4DAK503gCTVENhcECT4xX4DNjAjAeASABALDQ9EAt508vupKgcivJGRFNqKZcS1dBWNkBj37Ds8KnBJzNx//RV4M/Djv6aujM60PNe4DN5oxBE9rsLYp6MRWaenxsbfMhxkUkJCCDza+zLkU/Pbn/kM6llBaKYpch56QSLkb7u/gXf6EWpgawcn/eNeJo8D7teROYnJCovZB25qykWnk1/eHKzLzA53AKA/5uXbRQ26J/w7OWizGmKrjxBu3bVqtNxkyAIIAgCBEEgGp4Vpz1938Ozo08XZkbbAQi5hBUX7FKQm6y041RZRVUND+ijkWhoIeDvZ8PeRwAW/l27SvEbOCkotlQec34AAAAASUVORK5CYII="/>  Facebook</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="btn-floating btn-tw btn-sm" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADI0lEQVQ4ja2UW2icRRTHf2dmvt2aTRs3JTeTVNNUxAsVKopQUEsFURGlfeiD0AefpJTWVwWVgAoiKHh50IdC8UGkiET7ZEVFTMEiNNQbqUm3a5to11x2071/3zfHh92Nay5axD/8meHMnD//M3M48D9DWhtVtZkqQ1awm64xuZhkYVSksEYwU9R+E3DaCiNWGsFYwQOqoG2XRcAAVkAhjpVDQwl5ryVoACTBo1YYcdIQCBUihcg313Y2Y6GCKtYJh9sdGoDA840TSn51cru4wkJNOXGhxjs/VDiZrVOOlELNn7pjfHHnmjc8ma9uf3mi+vmzu1Lv35Z2L8QKvkkFfi97xr4rkq/7FTfOSC7ymhJkrHtL1xtf7ZHIzFV0W66uR+KKPVRSRl77vnwkczUmXuX0+HSFQqyIlRXGQq9YUSxH50tX7wGQubpOizBajuDAl8vUYiUw8MhwkgduSJBOGhR4+utlal5Zjc5Aorfu7fxpMGWWPLzkRKipgjPw5PYkx6YqhB7GM1U+uVhluNPS32EIY//Xd7ehN2lcz3VmpypYYYcTx5445OHpZd9zYrp6NGUkXQw1BY38bD4mm4837MWtiUYFTRZcv0gOOA5w+weL+1QY2jB7HQwm5UdVJkQomZi3HcBsXZ+KlAMz+di//m2xPpOPEtciZgUGuuxzXpkcCLgsIt6pavBbyLuA60oKu3oDqjXPpcLGZbbw4I5NPDScHHcCcyFfAHuNiIRG+NQIbEkYzl2uk81F+Jr+I7udcPDODgxgBKywW1XdSmP/obq5DG52Mbr1TCac+OznClO5cF1nHQnh1SfS3NITZJ1wxgneGT7sc/KxA1BVObfgD+eK0X3n5+PRyYtVpmZreL9WbLjb8eJjaW7a6nDCsW0JXhGRqHUuAJPz0b43Ty1/dHqmSqW+TrMBfV2W/Xd38vhdHSSsYKVRqhOWvLJ3MCFnARzA9ZstY/vTaKxcuBLyy5WIpZLHq9KVsoz2Bdw8EEBzdEnzh62AV9IK9wNnVxyqqvm1zvMi7LYgVv4+C1uVt8RaMzFWiGFOA565UWTpX9viv+BP3l+M9VHoZqUAAAAASUVORK5CYII="/>  Twitter</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="btn-floating btn-li btn-sm" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACiklEQVQ4ja2Uv0ubQRjHP3dJzPRWyWusSKt5h2KDQ0GqEEpLQWgkWRxKF6XS/8DJ0smAi4pbVzt0LBSCiwTqEGwQiS6FUhCXEI3FRKk/MjT6vnddfF+SVI2D3+Xee573+fC9u+cO7li+m5KpVEoCA5ZlPe3t7X1kWVawUCgcAvq6GnFVMB6Ph5RS01rrSaVUt9YapRSX42+t9WchxEIul/vTEphIJF7Ytv1Vax1uAjWMWuuybduv8/n89/p62QxTSn1zYS3UJaVcHR4efl4f9PYwHo+HhBBrwL1kMsnExARHR0fUajUikQidnZ04jkM0GmVqaopgMMj29rYPSFqW9alYLP4F8Htkn++91joMYFkWsViMWCx2rb29vT3Paa1WmwY+eEtOpVJSCPHW/eMWy0WIhu1/57IkQD6fHwC6AQzDIJFItASOjY3R3t7uTu8PDQ1FPaDP53vgZvr6+vD7/f8TmhQIBLAsqz700AMqpbzTrlarLWGuTk9PvW+ttah3uOsmSqUSZ2dnt4IVi8X60K4HHBwc/AkcApyfnzM/P3+j02q1yuzsLLZtu6HK1tbWL7jsw2w2q/v7+8NCiGeTk5PkcjnS6TSlUomenh46OjoAKBQKLC0tsbi4yM7OjtcNWuuP+/v7q55DgIuLizmlVHllZYWZmRkMw2BjYwPTND1npmmyvLzM8fFxveGDYDC44E4amml0dPQlkBkZGQmOj4/T1tbWAARIJpOcnJy497rmOM6rzc3NtSuBLlQp9cVxnC7DMEin09cBD4A36+vra/X5hscBIJPJZAOBwGMp5XwoFCo3503TLANzUspoM+xKh/XSWstKpfJEShkBUEoVwuHwDyGEuqnuTvUP5Zcp1CaMtREAAAAASUVORK5CYII="/>  Github</a>
                                    </li>
                                </ul>
                            </ul>
                            </div>
                    </div>

                    <div className="box border-bottom">
                            <div className="bg-primary text-center py-1 text-white mt-3">Box1</div>
                            <div className="bg-light px-2 py-3">
                                Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                            </div>
                    </div>
                </div>
            )
        }}</Data.Consumer>
    );
}
